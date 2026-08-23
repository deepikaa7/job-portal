import express from 'express';

import authenticateToken from '../middleware/isAuthenticated.js';
import { getAllCompanies,
     getCompanyById,
      registerCompany,
       updateCompany } from '../controllers/company.controller.js';

const router =express.Router();
router.route("/register").post(authenticateToken, getCompanyById);
router.route("/get").get(authenticateToken,getAllCompanies);
router.route("/get/:id").get(authenticateToken,registerCompany);
router.route("/update/:id").put(authenticateToken,updateCompany);


export default  router;