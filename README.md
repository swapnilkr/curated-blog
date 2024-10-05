### Truecaller Blog Frontend

This project is a frontend application for Truecaller's blog, implemented using React.js and WordPress.com's REST API.

Project deployed at: https://curated-blog.vercel.app/

##	Setup Instructions
	1. Extract the zip file:

	-- Unzip Swapnil.zip.

	2. Navigate to project directory:

	-- cd Swapnil folder.

	3. Install dependencies: Open a terminal or command prompt:
	-- Run npm install to install required dependencies.

	4. Run the application:
	-- Execute npm start to launch the application.

	5. The application will start running on 
	-- http://localhost:8000

### Features Implemented
-- List View:

	Fetches 20 most recent posts from Truecaller.blog.
	Fetches a list of all available categories.
	Posts are filterable by category.
	Each post is rendered as a card displaying category(ies), thumbnail, title, and formatted date.
	Pagination support with a paginator for loading older posts.

-- Detail View:

	Displays full details of a selected post.
	Includes header with featured image, title, author, date, and post content.

##	Additional Features:

	1. Implemented fallback shimmer for loading states.
	2. Handles cases where no content is returned for categories. (ex -> category: random)
	3. Separate Image shimmer for high resolution images, so that people need not wait for image load and can atleast start reading aticle
	4. For post with no image url showing truecaller logo as fallback
	5. Added title and logo at Tab level


### Notes

	-- Ensure you have Node.js and npm installed on your machine.
	-- This project uses React.js and interacts with the WordPress.com REST API.
	-- The design closely resembles the provided design specifications in the assignment.