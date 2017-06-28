$(() => {
  console.log('script file loaded');
  // JQUERY GOES HERE!!

  // set active menu bar starts here
  const url = window.location.href;
  const nav_urls = $('.nav a');
  $('.nav a').each(function(){
    if (url === (this.href)) {
      $(this).closest('li').addClass('active');
    }
  });
  // set active menu bar ends here

  // set focus when modal is opened
  // $('#modal-content').on('shown.bs.modal', () => {
  //     $("#txtname").focus();
  // });

  // show the modal onload
  // const showModal = () =>{
  //   $('#modal-content').modal({
  //     show: true
  //   });
  // };
  // setTimeout(showModal, 5000);

});
