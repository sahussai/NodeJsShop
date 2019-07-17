exports.getPageNotFound = (req, res, next) => {
    res.status(404).render('page-not-found', {pageTitle: 'Page Not Found', path: '/error'});
  };