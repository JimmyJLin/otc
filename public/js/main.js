$(() => {
  console.log('script file loaded');
  // JQUERY GOES HERE!!

  // set focus when modal is opened
  $('#modal-content').on('shown.bs.modal', () => {
      $("#txtname").focus();
  });

  // show the modal onload
  const showModal = () =>{
    $('#modal-content').modal({
      show: true
    });
  };

setTimeout(showModal, 5000);

});
