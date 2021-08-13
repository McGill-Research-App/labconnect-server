import express from "express";
import { getMultiple } from "../services/postings";

const router = express.Router();

/* GET postings. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await getMultiple());
  } catch (err) {
    console.error(`Error while getting postings `, err.message);
    next(err);
  }
});

module.exports = router;