const db = require('../models');

module.exports = (app) => {

  // Show Assessment
  app.get('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.findById(assessmentId)
    .then((assessment) => {
      console.log("Response from Assessment/Show: ", assessment)
      res.status(200)
      res.json({
        message: "Assessment request successful",
        assessment
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  //TODO: Code Review  whether the assessmentId exists, it does not ever hits catch error
    // UPDATE a Assessment
  app.put('/assessments/:id/update', (req, res) => {
    const assessmentId = req.params.id
    const assessment = req.body
    db.Assessment.update(assessment, {
      where: { id: assessmentId }
    }).then((response) => {
        res.status(200)
        res.json({
          msg: 'assessment updated successfully!',
        })
      }).catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });

  // Create a Assessment
  app.post('/users/:userId/rubrics/:rubricId/assessments/create', (req, res) => {
    const newAssessment = {...req.body, userId: req.params.userId, rubricId: req.params.rubricId}
    db.Assessment.create(newAssessment)
    .then((assessment) => {
      res.status(200)
      res.json({
        msg: 'assessment added successfully!',
        assessment
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  // Delete a Assessment
  app.delete('/assessments/:id/delete', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.destroy({ where: { id: assessmentId } })
    .then((response) => {
      console.log("Response from Assessment/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Assessment deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });
}
