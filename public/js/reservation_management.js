class RESERVATION_MANAGEMENT_PC {
    refund_button_click_handler () {
        if ($('table input:checkbox:checked').length < 1) {
                alert('하나 이상 선택해 주세요.');
        } else {
            show_refund_modal(function () {
                // false 를 리턴하면 모달 안닫힘.
                return set_refund_info(function (name, bank, account_number) {
                    $('tbody input:checkbox:checked').each(function (index) {
                        var tr = $(this).parent().parent();
                        var td = tr.children();
                        const rev_id = td.eq(2).text();

                        request_fund_with_info(rev_id, name, bank, account_number);
                    });
                });
            }, function () {});
        }
    }
}

class RESERVATION_MANAGEMENT_MOBILE {
    refund_button_click_handler () {
        if ($('input[name=rev_index]:checkbox:checked').length < 1) {
                alert('하나 이상 선택해 주세요.');
        } else {
            show_refund_modal(function () {
                // false 를 리턴하면 모달 안닫힘.
                return set_refund_info(function (name, bank, account_number) {
                    $('#table_body input:checkbox:checked').each(function (index) {
                        var tr = $(this).parent().parent();
                        var td = tr.children();
                        const rev_id = td.eq(2).text();
                        
                        request_fund_with_info(rev_id, name, bank, account_number);
                    });
                });
            }, function () {});
            
        }
    }
}

function show_refund_modal (approve_handler, deny_handler) {
    $('.ui.modal.refund ')
    .modal({
        closable  : false,
        onDeny    : deny_handler,
        onApprove : approve_handler
    })
    .modal('show')
;
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