const { replaceAll, removeHyphen, removeRoomNumber, splitRoomName } = require('./util');

describe('Test replaceAll', () => {
  test('01011000101 에서 1을 공백으로 치환하면 000000이 되는가 ?', () => {
    expect(replaceAll('01011000101', '1', '')).toBe('000000');
  });

  test('내안의 바다 에서 바다를 숲으로 치환하면 내안의 숲이 되는가 ?', () => {
    expect(replaceAll('내안의 바다', '바다', '숲')).toBe('내안의 숲');
  });

  test('가나다가나다가나다 에서 가나를 다로 치환하면 다다다다다다가 되는가 ?', () => {
    expect(replaceAll('가나다가나다가나다', '가나', '다')).toBe('다다다다다다');
  });
});

describe('Test removeHyphen', () => {
  test('010-6666-9999 를 매개변수로 전달하면 01066669999가 리턴 되는가 ?', () => {
    expect(removeHyphen('010-6666-9999')).toBe('01066669999');
  });

  test('042-481-7777 를 매개변수로 전달하면 0424817777가 리턴 되는가 ?', () => {
    expect(removeHyphen('042-481-7777')).toBe('0424817777');
  });

  test('042--481--7777 를 매개변수로 전달하면 0424817777가 리턴 되는가 ?', () => {
    expect(removeHyphen('042--481--7777')).toBe('0424817777');
  });
});

describe('Test removeRoomNumber', () => {
  test('firstetc_01 를 매개변수로 전달하면 firstetc가 리턴 되는가 ?', () => {
    expect(removeRoomNumber('firstetc_01')).toBe('firstetc');
  });

  test('bluebird_99 를 매개변수로 전달하면 bluebird가 리턴 되는가 ?', () => {
    expect(removeRoomNumber('bluebird_99')).toBe('bluebird');
  });

  test('site_grass_01 를 매개변수로 전달하면 site_grass가 리턴 되는가 ?', () => {
    expect(removeRoomNumber('site_grass_01')).toBe('site_grass');
  });

  test('site_grass_13 를 매개변수로 전달하면 site_grass가 리턴 되는가 ?', () => {
    expect(removeRoomNumber('site_grass_13')).toBe('site_grass');
  });

  test('site_grass_123 를 매개변수로 전달하면 site_grass가 리턴 되는가 ?', () => {
    expect(removeRoomNumber('site_grass_123')).toBe('site_grass');
  });
});

describe('Test splitRoomName', () => {
  test('firstetc_01 를 매개변수로 전달하면 firstetc와 01이 리턴되는가 ?', () => {
    expect(splitRoomName('firstetc_01')).toEqual({ name: 'firstetc', num: '01' });
  });

  test('bluebird_99 를 매개변수로 전달하면 bluebird와 99가 리턴 되는가 ?', () => {
    expect(splitRoomName('bluebird_99')).toEqual({ name: 'bluebird', num: '99' });
  });

  test('site_grass_01 를 매개변수로 전달하면 site_grass와 01이 리턴 되는가 ?', () => {
    expect(splitRoomName('site_grass_01')).toEqual({ name: 'site_grass', num: '01' });
  });

  test('site_grass_13 를 매개변수로 전달하면 site_grass와 13이 리턴 되는가 ?', () => {
    expect(splitRoomName('site_grass_13')).toEqual({ name: 'site_grass', num: '13' });
  });

  test('site_grass_123 를 매개변수로 전달하면 site_grass와 123이 리턴 되는가 ?', () => {
    expect(splitRoomName('site_grass_123')).toEqual({ name: 'site_grass', num: '123' });
  });
});
