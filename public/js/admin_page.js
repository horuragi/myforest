function active_check(context) {
  switch (context) {
    case 'book':
      $('#book').attr('class', 'active item');
      break;
    case 'room':
      $('#room').attr('class', 'active item');
      break;
    case 'advertise':
      $('#advertise').attr('class', 'active item');
      break;
    case 'visit':
      $('#visit').attr('class', 'active item');
      break;
    case 'users':
      $('#users').attr('class', 'active item');
      break;
    case 'camping':
      $('#camping').attr('class', 'active item');
      break;
    case 'etc':
      $('#etc').attr('class', 'active item');
      break;
    default:
      break;
  }
}
