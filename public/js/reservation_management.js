class RESERVATION_MANAGEMENT_PC {
    refund_button_click_handler () {
        const self = this;
        if ($('table input:checkbox:checked').length < 1) {
                alert('하나 이상 선택해 주세요.');
        } else {
            self.show_refund_modal(function () {
                // false 를 리턴하면 모달 안닫힘.
                return set_refund_info(function (name, bank, account_number) {
                    $('tbody input:checkbox:checked').each(function (index) {
                        var tr = $(this).parent().parent();
                        var td = tr.children();
                        const rev_id = td.eq(2).text();

                        request_fund_with_info(rev_id, name, bank, account_number);
                    });
                });
            }, function () {
                console.log('cancel');
            });
        }
    }

    show_refund_modal (approve_handler, deny_handler) {
        $('.ui.modal.refund ')
        .modal({
            closable  : false,
            onDeny    : deny_handler,
            onApprove : approve_handler
        })
        .modal('show');
    }
}

class RESERVATION_MANAGEMENT_MOBILE {
    refund_button_click_handler () {
        const self = this;
        if ($('input[name=rev_index]:checkbox:checked').length < 1) {
                alert('하나 이상 선택해 주세요.');
        } else {
            self.show_refund_modal(function () {
                // false 를 리턴하면 모달 안닫힘.
                return set_refund_info(function (name, bank, account_number) {
                    $('#table_body input:checkbox:checked').each(function (index) {
                        var tr = $(this).parent().parent();
                        var td = tr.children();
                        const rev_id = td.eq(2).text();
                        
                        request_fund_with_info(rev_id, name, bank, account_number);
                    });
                });
            }, function () {
                console.log('mobile cancel');
            });
            
        }
    }

    show_refund_modal (approve_handler, deny_handler) {
        const modal = $('#refund_modal');
        modal.modal('show'); // show

        //버튼 이벤트 등록 (매번 초기화를 위해 off 호출)
        $('#refund_request').off('click').on('click', function () {
            if(approve_handler()) {
                modal.modal('hide');
            }
        });
        $('#refund_cancel').off('click').on('click', function () {
            deny_handler();
            modal.modal('hide');
        });
    }
}

function get_refund_info(rev_id) {
    $.ajax({
        type: "GET",
        url: "/reser/get_reservation_refund_info",
        data: { 
          rev_id: rev_id 
        },
        success: function(response) {
          if (response.hasOwnProperty("status") === false || response.status !== "success") {
            alert("환불 정보가 존재하지 않습니다.");
          } else {
            const refund_info = response.result;

            $("#refund_reserve_type").html(reserve_type);
            $("#refund_reserve_date").html(reserve_date);
            $("#refund_reserve_price").html(price);
            $("#refund_name").html(refund_info.name);
            $("#refund_bank").html(refund_info.bank);
            $("#refund_account_number").html(refund_info.account_number);
            $("#refund_date").html(formatDate(refund_info.refund_date));

            $('.ui.modal.refund_info').modal('show');
          }
        },
        error: function(xhr, status, error) {
          alert("환불 정보를 불러오지 못했습니다.");
        }
    });
}

/**
 * 환불 요청 정보 셋팅
 * @param {*} callback 콜백 함수 
 * @returns {boolean} 셋팅 성공 여부
 */
function set_refund_info(callback) {
    const name = $('#refund_name').val();
    const bank = $('#refund_bank').val();
    const account_number = $('#refund_account_number').val();

    if (!valid_refund_info(name, bank, account_number)) {
        return false;
    }

    callback(name, bank, account_number);

    return true;
}

/**
 * 환불 요청 정보 검사
 */
function valid_refund_info(name, bank, account_number) {
    if (!name) {
        alert("예금주를 입력해주세요.");
        return false;
    }

    if (!bank) {
        alert("은행을 입력해주세요.");
        return false;
    }

    if (!account_number) {
        alert("계좌 정보를 입력해주세요.");
        return false;
    }

    return true;
}

/**
 * 환불 요청
 */
function request_fund_with_info(rev_id, name, bank, account_number) {
    const parameters = [{
        name: 'args',
        value: rev_id
     }, {
       name: 'name',
       value: name
     }, {
        name: 'bank',
        value: bank
    }, {
        name: 'account_number',
        value: account_number
    }];

    const form = rev_frm;
    parameters.forEach(function (p) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = p.name;
        input.value = p.value;
        form.appendChild(input); 
    });

    form.action = '/reser/reservation_refund_with_info';
    form.submit();
}

window.RESERVATION_MANAGEMENT = {
    PC: new RESERVATION_MANAGEMENT_PC(),
    MOBILE: new RESERVATION_MANAGEMENT_MOBILE()
};