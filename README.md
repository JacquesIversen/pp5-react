# **Car Solution Army**

**[CSA](https://pp5-react-3a1a7789b87e.herokuapp.com/)** was developed and submitted as the fifth and final Portfolio Project as part of the Advanced Frontend specialization for Code Institute's Diploma in full-stack software development.

# **Car Solution Army**

This project marks the introduction of a diverse range of features and functionalities designed to enrich the experience of users passionate about DIY car maintenance, inspired by my previous work with similar blogs, sites and tutorials. CSA is a virtual hub tailored for a vibrant community of DIY car enthusiasts, specifically those dedicated to resolving issues and sharing knowledge about various car models and repair techniques.

In contrast to its earlier iterations, this platform now offers a more immersive and interactive experience, aiming to serve as the ultimate social media platform exclusively crafted for individuals interested in DIY car repairs. It stands as a unique offering, as it appears to be the sole online space dedicated to empowering DIY car enthusiasts to collaborate and learn from one another's experiences.

The platform not only fulfills the existing demand for learning and interactive engagement among those passionate about DIY car maintenance but also strives to amplify that demand. It serves as a rare opportunity for users to establish and nurture their very own distinct online community. Here, members are encouraged to share their challenges, seek solutions, and collaboratively troubleshoot a myriad of car-related problems. The platform thrives on the spirit of camaraderie, where DIY enthusiasts unite to enhance their skills and contribute to a thriving community of car fixers.

- Deployed website **[Here](https://pp5-react-3a1a7789b87e.herokuapp.com/)**

- View the backend repository on Github **[Here](https://github.com/JacquesIversen/api-rest-for-final-pp5)**.

## Contents

- **[User Stories](#user-stories)**

- **[Agile Development Process](#agile-development-process)**

- **[Typography](#typography)**

- **[Main Features](#main-features)**

- **[Features for the future](#features-for-the-future)**

- **[Testing](#testing)**

- **[Deployment](#deployment)**

- **[Technologies used](#technologies-used)**

- **[Credits](#credits)**

### User Stories for Car Community Sharing Platform:

#### **Navigation:**

- As a user, I can view a navigation bar on every page so that I can easily navigate between different sections of the platform.

#### **Routing:**

- As a user, I can navigate through pages quickly without page refresh so that I can seamlessly access different content.

#### **Authentication - Sign Up:**

- As a user, I can create a new account to access all features available to registered users and actively participate in the car community.

#### **Authentication - Sign In:**

- As a user, I can sign in to the platform to access functionalities specific to logged-in users, enabling me to engage fully with the community.

#### **Authentication - Logged In Status:**

- As a user, I can easily identify whether I am logged in or not, ensuring I have access to the relevant features and information.

#### **Authentication - Refreshing Access Tokens:**

- As a user, I can maintain my logged-in status until I choose to log out, ensuring a seamless experience without constant interruptions.

#### **Navigation: Conditional Rendering:**

- As a logged-out user, I can see sign-in and sign-up options, providing me with the means to join the community or access my account.

#### **Avatar:**

- As a user, I can view avatars of other users, facilitating easy identification and interaction within the car community.

#### **Profile:**

- **Profile Page:**
  - As a user, I can view other users’ profiles to learn more about their car-related posts and experiences, fostering a sense of community.
- **Most Followed Profiles:**
  - As a user, I can see a list of the most followed profiles, enabling me to discover popular contributors and their valuable insights.
- **View User Data:**
  - As a user, I can access information about other users, including the number of posts, followers, and users followed, allowing me to better understand their contributions.
- **Follow/Unfollow a User:**
  - As a logged-in user, I can follow and unfollow other users, enabling me to curate my feed and engage with specific individuals.
- **View All Posts by a Specific User:**
  - As a user, I can view all posts by a specific user, helping me catch up on their latest contributions and decide whether to follow them.
- **Update Username and Password:**
  - As a logged-in user, I can update my username and password, ensuring my profile remains secure and reflecting any desired changes in my display name.

#### **Sharing Car-related Content:**

- **Create Posts:**
  - As a logged-in user, I can create posts with images, sharing my car-related experiences, issues, and solutions with the community.
- **View a Post:**
  - As a user, I can view the details of a single post to learn more about specific car-related topics or discussions.
- **Like a Post:**
  - As a logged-in user, I can like a post to express my support for content that resonates with me, encouraging valuable contributions.
- **Post Page:**
  - As a user, I can view the posts page, allowing me to read comments and engage in discussions about the post's topic.
- **Edit Post:**
  - As a post owner, I can edit my post title and description, enabling me to make corrections or updates to my content after it was created.
- **Create a Comment:**
  - As a logged-in user, I can add comments to a post, sharing my thoughts, insights, or solutions related to the post's content.
- **Comment Date:**
  - As a user, I can see the timestamp of comments, providing context about the comment's recency and relevance.
- **View Comments:**
  - As a user, I can read comments on posts, gaining insights into other users' perspectives and solutions related to the post's topic.
- **Delete Comments:**
  - As a comment owner, I can delete my comments, allowing me to control the removal of my contributions from the platform.
- **Edit a Comment:**
  - As a comment owner, I can edit my comments, ensuring I can refine or update my existing contributions.

#### **Car Profile:**

- **Create and Edit Car Profile:**
  - As a logged-in user, I can create and edit my car profile, including adding and changing images of my car, as well as providing information about my vehicle.
- **View Other User's Car Profiles:**
  - As a logged-in user, I can view other users' car profiles if I am following them, enabling me to explore different car models and modifications within the community.
- **Search Car Profiles:**
  - As a user, I can search for car profiles using keywords, allowing me to find specific car models or modifications that interest me.
- **Infinite Scroll:**
  - As a user, I can keep scrolling through car profiles, with content loading automatically, ensuring a seamless browsing experience without the need to navigate to the next page.

#### **Car Repair and Maintenance Details:**

- **Create and Edit Repair Details:**
  - As a logged-in user, I can create and edit repair details about my car, sharing my DIY experiences and solutions with the community.
- **View Other User's Repair Details:**
  - As a logged-in user, I can view repair details of other users' cars if I am following them, allowing me to learn from their experiences and solutions.
- **Search Repair Details:**
  - As a user, I can search for car repair details using keywords, helping me find specific DIY solutions or techniques shared by other community members.
- **Infinite Scroll:**
  - As a user, I can keep scrolling through repair details, with content loading automatically, ensuring a seamless browsing experience without the need to navigate to the next page.

#### **Car Modification and Upgrade Details:**

- **Create and Edit Modification Details:**
  - As a logged-in user, I can create and edit modification details about my car, showcasing my customizations and upgrades to inspire others in the community.
- **View Other User's Modification Details:**
  - As a logged-in user, I can view modification details of other users' cars if I am following them, allowing me to explore innovative car modifications and upgrades.
- **Search Modification Details:**
  - As a user, I can search for car modification details using keywords, helping me find specific customization ideas or upgrade solutions shared by fellow enthusiasts.
- **Infinite Scroll:**

  - As a user, I can keep scrolling through modification details, with content loading automatically, ensuring a seamless browsing experience without the need to navigate to the next page

  ### Agile Project Planning Process:

#### 1. **Project Vision and Scope:**

- Define the project vision, objectives, and scope.
- Identify key stakeholders and gather their input.

#### 2. **Create a Product Backlog:**

- Develop a prioritized list of features, enhancements, and tasks.
- Prioritize items based on business value, customer needs, and dependencies.

#### 3. **Sprint Planning:**

- **Backlog Refinement:**
  - Review and refine the items in the product backlog.
  - Break down large tasks into smaller, manageable user stories.
- **Sprint Planning Meeting:**
  - Select a subset of high-priority items from the product backlog for the upcoming sprint.
  - Define the sprint goal and success criteria.
  - Team collaboratively estimates the effort required for each user story (using story points or other estimation techniques).
  - Commit to the sprint backlog (items to be completed during the sprint).

#### 4. **Sprint Execution:**

- **Daily Stand-up Meetings:**
  - Team members share progress, challenges, and plans for the day.
  - Discuss impediments and work together to resolve them.
- **Development and Testing:**
  - Developers work on implementing user stories.
  - Testers perform continuous testing, including unit tests, integration tests, and user acceptance tests.
  - Apply Test-Driven Development (TDD) practices if applicable.
- **Collaboration and Communication:**
  - Regular communication within the team and with stakeholders.
  - Foster a collaborative environment to encourage problem-solving and knowledge sharing.

#### 5. **Incremental Development:**

- Deliver incremental, potentially shippable product increments at the end of each sprint.
- Gather feedback from stakeholders and end-users after each sprint review.
- Iterate and make necessary adjustments based on feedback received.

#### 6. **Sprint Review and Retrospective:**

- **Sprint Review:**
  - Demo the completed user stories to stakeholders.
  - Collect feedback and review the sprint goals.
- **Sprint Retrospective:**
  - Reflect on the sprint process and team dynamics.
  - Identify what went well and areas for improvement.
  - Discuss actionable items to enhance team performance in the next sprint.

#### 7. **Repeat:**

- Conduct subsequent sprints, each typically lasting 1-4 weeks.
- Continuously refine the product backlog based on changing priorities and customer feedback.
- Adapt plans and strategies based on lessons learned from previous sprints.

#### 8. **Release Planning (Optional):**

- Plan releases based on the completed increments and overall project goals.
- Determine release dates, feature sets, and any necessary preparations for deployment.

#### 9. **Monitoring and Metrics:**

- Track key metrics such as velocity, sprint burndown, and customer satisfaction.
- Use metrics to analyze team performance and project progress.
- Make data-driven decisions to optimize the team's workflow and delivery process.

#### 10. **Continuous Improvement:**

- Foster a culture of continuous improvement.
- Encourage open communication, knowledge sharing, and cross-functional collaboration.
- Implement process improvements and adopt best practices to enhance team productivity and product quality.

To provide real-time feedback to users notifying them of any changes they make to their data I used React's ['NotificationContainer' component](https://www.npmjs.com/package/react-notifications).
