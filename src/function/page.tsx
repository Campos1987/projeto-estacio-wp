const SelectPage = () => {
  const urlPart = window.location.pathname.split('/')[1];
  console.log(window.location.pathname.split('/')[1]);

  if (urlPart.toLocaleLowerCase() === 'py') {
    return 'py';
  } else {
    return 'js';
  }
};
export default SelectPage;
