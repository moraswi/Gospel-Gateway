import httpService from "./httpService";

const apiService = {
  // >>>>>>>>>>>HTTPSERVICE.POST>>>>>>>>>>HTTPSERVICE.POST<<<<<<<<<<<<<<HTTPSERVICE.POST<<<<<<<<<<<<<<<<
  // logIn
  logIn(data) {
    return httpService.post(`login`, data);
  },

  // registerUser
  registerUser(data) {
    return httpService.post(`register-user`, data);
  },

  // addOffering
  addOffering(data) {
    return httpService.post(`add-offering`, data);
  },

  // addEvent
  addEvent(data) {
    return httpService.post(`add-event`, data);
  },

  // addChurchPlan
  addChurchPlan(data) {
    return httpService.post(`add-churchplan`, data);
  },

  // addChurch
  addChurch(data) {
    return httpService.post(`add-church`, data);
  },

  // addServiceProgram
  addServiceProgram(data) {
    return httpService.post(`add-serviceprogram`, data);
  },

  // addBranch
  addBranch(data) {
    return httpService.post(`add-branch`, data);
  },

  // addAnnouncement
  addAnnouncement(data) {
    return httpService.post(`add-announcement`, data);
  },

  // >>>>>>>>>>HTTPSERVICE.GET>>>>>>>>>>>HTTPSERVICE.GET<<<<<<<<<<<<<<<HTTPSERVICE.GET<<<<<<<<<<<<<<<

  //   getAllUsers
  getAllUsers() {
    return httpService.get(`get-all-users`);
  },

  //   getOfferingByBranchId
  getOfferingByBranchId(branchId) {
    return httpService.get(`get-offering-bybranchid/${branchId}`);
  },

  // getEventByChurchId
  getEventByChurchId(churchId) {
    return httpService.get(`get-event-bychurchid/${churchId}`);
  },

  // getChurchPlanByBranchId
  getChurchPlanByBranchId(branchId) {
    return httpService.get(`get-churchplan-bybranchId/${branchId}`);
  },

  // getAllChurches
  getAllChurches() {
    return httpService.get(`get-all-churches`);
  },

  // getBranchByBranchId
  getBranchByBranchId(churchId) {
    return httpService.get(`get-branch-bybranchid/${churchId}`);
  },

  // getBranchByChurchId
  getBranchByChurchId(churchId) {
    return httpService.get(`get-branch-bychurchid/${churchId}`);
  },

  // getBranchByChurchid
  getAnnouncementByChurchId(churchId) {
    return httpService.get(`get-announcement-bychurchid/${churchId}`);
  },

  // >>>>>>>>>>HTTPSERVICE.PUT>>>>>>>>>>>HTTPSERVICE.PUT<<<<<<<<<<<<<<<HTTPSERVICE.PUT<<<<<<<<<<<<<<<

  // updateUser
  updateUser(data) {
    return httpService.put(`update-user`, data);
  },

  // updateOffering
  updateOffering(data) {
    return httpService.put(`update-offering`, data);
  },

  // updateEvent
  updateEvent(data) {
    return httpService.put(`update-event`, data);
  },

  // updateChurchPlan
  updateChurchPlan(data) {
    return httpService.put(`update-churchplan`, data);
  },

  // updateChurch
  updateChurch(data) {
    return httpService.put(`update-church`, data);
  },

  // updateBranch
  updateBranch(data) {
    return httpService.put(`update-branch`, data);
  },

  // updateAnnouncement
  updateAnnouncement(data) {
    return httpService.put(`update-announcement`, data);
  },

  // >>>>>>>>>>HTTPSERVICE.DELETE>>>>>>>>>>>HTTPSERVICE.DELETE<<<<<<<<<<<<<<<HTTPSERVICE.DELETE<<<<<<<<<<<<<<<

  // deleteUser
  deleteUser(id) {
    return httpService.delete(`update-announcement/${id}`);
  },

  // deleteOffering
  deleteOffering(id) {
    return httpService.delete(`delete-offering/${id}`);
  },

  // deleteEvent
  deleteEvent(id) {
    return httpService.delete(`delete-event/${id}`);
  },

  // deleteChurchPlan
  deleteChurchPlan(id) {
    return httpService.delete(`delete-churchplan/${id}`);
  },

  // deleteChurch
  deleteChurch(id) {
    return httpService.delete(`delete-church/${id}`);
  },

  // deleteBranch
  deleteBranch(id) {
    return httpService.delete(`delete-branch/${id}`);
  },

  // deleteAnnouncement
  deleteAnnouncement(id) {
    return httpService.delete(`delete-announcement/${id}`);
  },
};
