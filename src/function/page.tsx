const SelectPage = () => {
  const urlPart = window.location.pathname.split('/')[1];
  console.log(window.location.pathname.split('/')[1]);

  if (urlPart.toLocaleLowerCase() === 'py') {
    return 'py';
  } else if (urlPart.toLocaleLowerCase() === 'js') {
    return 'js';
  } else {
    return 'default';
  }
};
export default SelectPage;
