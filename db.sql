CREATE TABLE Postings (
  posting_id INT NOT NULL AUTO_INCREMENT, 
  posting_title VARCHAR(50) NOT NULL, 
  employer VARCHAR(50), -- will need sep table
  location VARCHAR(50), -- will need sep table
  project_name VARCHAR(200), 
  department VARCHAR(50), 
  professor VARCHAR(50), -- will need sep table
  description VARCHAR(1000), 
  target VARCHAR(1000), 
  requirements VARCHAR(1000), 
  tags VARCHAR(500), -- will need sep table
  funding VARCHAR(500), -- will need sep table
  PRIMARY KEY (posting_id)
  ); 