const createJob = (req, res) => {
  res.send("create job");
};
const getAllJobs = (req, res) => {
  res.send("get All jobs");
};
const deleteJob = (req, res) => {
  res.send("delete job");
};
const updateJob = (req, res) => {
  res.send("update job");
};
const showStats = (req, res) => {
  res.send("show Stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
