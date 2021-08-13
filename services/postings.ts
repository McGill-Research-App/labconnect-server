const db = require('../services/db');

/**
 * Just a test function
 * @returns 
 */
export async function getMultiple() {
  const data = await db.query('SELECT * FROM Postings');
  const meta = {page: 1};

  return {
    data,
    meta
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
INTERFACE FOR POSTINGS SERVICE
*/

/**
 * Gets postings based on given search filter. Gets all postings by default.
 * @param filter - (optional) JSON obj with columns vals to filter by
 * @returns list of postings which fit search filter
 */
export async function getPostings(filter) {}


/**
 * Adds posting
 * @param data - JSON object with data
 * @returns success or fail
 */
export async function addPosting(data) {}

/**
 * Edit existing posting
 * @param posting_id 
 */
export async function editPosting(posting_id) {}

/**
 * Delete a posting
 * @param posting_id 
 */
export async function deletePosting(posting_id) {}


