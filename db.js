




db.enablePersistence()
  .catch(err => {
    if (err.code === 'failed-precondition')
    {
      //probably multiple tabs open at once
      console.log('presistence failed');

    }
    else if (err.code === 'unimplemented')
    {
      //lack of browser support
      console.log('presistence not avaliable');
    }
  })
  