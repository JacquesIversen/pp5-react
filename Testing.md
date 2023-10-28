## Manuel Testing

- Click here to return to the README.md file.

- A series of manual tests were carried out to verify that all functionalities performed as intended. Below are the test cases.

## Navbar

### Test Case 1: Navbar

**Test Case Description:** Verify that the `NavBar` component working correctly.

**Test Steps:**

1. Render the `NavBar` component. == pass
2. Check if the navbar logo is displayed. == pass
3. Check if all nav Links are working. (not logged in) == pass
4. Check if all nav links are working. (logged in) == pass
5. Logo sends you to home/feed page == pass
6. Navbar is responsive == pass
7. BurgerMenu should contain all links, all working (not logged in) == pass
8. BurgerMenu should contain all links, all working (logged in) == pass
9. Burger should close when clicked outside, UseClickOutside == pass

**Expected Result:**
The `NavBar` component should render with a visible navbar logo.
Links should take you to designated destination.
Dropdown functionality linked from moreDropdown.js appied.

**Result:** Passed

## Test Cases for `SignInForm`

- **Test Objective:**
- Verify that users can successfully sign in with valid credentials
- Verify that users are denied access when providing incorrect credentials.
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the Sign-In page. == pass
  2.  Enter a valid username and password. == pass
  3.  Click the "Sign In" button, user is signed in. == pass
  4.  Enter a valid username and password. == pass
  5.  Click the "Sign In" button, user is not signed in. == pass
  6.  Sending empty data in form, should return an error message == Fail
  7.  Giving wrongfull information should cause error == Fail
  8.  Link for signup working == pass
  9.  Navbar is rendered correctly == pass
  10. Page is responsive == pass
  11. When signed in, user is sent to feed page == pass

- **Expected Results:**
  - User is successfully signed in and redirected to the expected page.
  - Links all functioning and giving right endpoint.
  - Design responsive.
- **Result:** Fail

## Test Cases for `SignUpForm`

- **Test Objective:**
- Verify that users can successfully sign up with valid credentials
- Verify that users are denied access when providing incorrect credentials.
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the Sign-Up page. == pass
  2.  Enter a valid username and password. == pass
  3.  Click the "Sign up" button, user is created. == pass
  4.  Sending empty data in form, should return an error message == pass
  5.  Giving wrongfull, or duplicate information should cause error == pass
  6.  Link for signin working == pass
  7.  Navbar is rendered correctly == pass
  8.  Page is responsive == pass
  9.  Promting an existing username will result in error == pass
  10. Typing a password less than 8 characters results in error == pass
  11. Typing different password in form will cause an error == pass

- **Expected Results:**
  - User is successfully created and redirected to the signin page.
  - Links all functioning and giving right endpoint.
  - Design responsive.
- **Result:** Pass

## Test Cases for `CreateIssue`

- **Test Objective:**
- Verify that only users can access the createissue page:
- Verify that users are able to prompt data to all form components
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the Create issue page as a logged in user == pass
  2.  Navigate to the Create issue page as not logged in results in notfound == pass
  3.  Form appear with tired man default picture == pass
  4.  All form inputs are able to be prompted == pass
  5.  When uploading picture, picture appear == pass
  6.  Availability to change issue picture == pass
  7.  Share button will immediately give feedback to the user == fail
  8.  When shared, issue is posted and user directed to issuepage == pass
  9.  Sending empty form will cause error, and not post content == fail
  10. Sending default picture will cause error, and not post content == pass
  11. Input placeholder text is displayed == pass
  12. Navbar is rendered correctly == pass
  13. Page is responsive == pass

- **Expected Results:**
  - User has successfully created an issue, which is posted to the API.
  - User cant send empty data.
  - Design responsive.
- **Result:** Fail

## Test Cases for `EditIssue`

- **Test Objective:**
- Verify that only IssueOwner can access Issue/id/edit
- Verify that owner recieves current data in the form
- Verify that new content is posted to the issue
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the Edit page from IssuePage == pass
  2.  Only Owner can access Edit/id == fail
  3.  Only Owner can change/put infomation Issue == pass
  4.  Data and picture from current Issue appear == pass
  5.  Picture can be changed, but not replaced with null == pass
  6.  All form content will accept change == pass
  7.  Cancel redirects to earlier page == pass
  8.  Save changes put/post new information/picture to the Issue == pass
  9.  Navbar is rendered correctly == pass
  10. Page is responsive == fail Form will appear twice in small screen, img is not centered.

- **Expected Results:**
  - User has successfully edited an issue, which is posted to the API.
  - User cant erase and send empty data.
  - Design responsive.
- **Result:** Fail

## Test Cases for `Feed`

- **Test Objective:**
- Verify that all viewers are shown all Issues
- Searchbar Functioning
- Ensure working links

- **Test Steps:**

  1.  Navigate to the Feed/Home page == pass
  2.  Issues are displaeyd in a single column design == pass
  3.  Date, and total amount of comments are displayed == pass
  4.  Searchbar displayed in top == pass
  5.  Searchbar following user placement in feed == fail stays at top.
  6.  Searchbar not found results in notfound message == fail
  7.  Navbar is rendered correctly == pass
  8.  Page is responsive == pass

- **Expected Results:**
  - User has successfully created an issue, which is posted to the API.
  - User cant send empty data.
  - Design responsive.
- **Result:** Fail

## Test Cases for `IssuePage`

- **Test Objective:**
- Verify that all can view the issue:
- Verify that users are able to see comments regarding this specific issue
- Verify users can create comments in the thread.
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the IssuePage as a logged in user == pass
  2.  Navigate to the IssuePage as a static user == fail
  3.  Issue is displayed in card format, with listing date and (functional)commentcounter == pass
  4.  Issue has describtion in the bottom in full length == pass
  5.  3 Dots shows only if owner of issue == pass
  6.  3 Dots edit link takes you to EditIssue == pass
  7.  3 Dots Delete, deletes issue == pass
  8.  3 Dots Delete, confirmation alert apearing == Fail
  9.  IssueDescription: Vehicle description is displayed in right side == pass
  10. IssueDescription: Owner Biography and Avatar is displayed in right side == Fail
  11. CreateComment: Create comment module is Rendered == Pass
  12. CreateComment: Create comment module creates comments when promted data == Pass
  13. CreateComment: When comment created, user is verified with alert == Fail
  14. CreateComment: created with blank should result in displayed error == fail
  15. CreateComment: create a comment (not logged in) should guide you to login == fail
  16. Comment: Comments should appear stacked, and GET all comments realted to issue == pass
  17. Comment: Comments should filter with newest ascending == fail
  18. Comment: Comments should contain avatar, creation datetime == pass
  19. Comment: Comments should contain message/content == pass
  20. Comment/Like: Should display 2 waving hands on own comments == pass
  21. Comment/Like: Should display thumps up for like, and thumps down for dislikes == pass
  22. Comment/Like: Not able to like, og dislike own comments == pass
  23. Comment/Like: User able to like, og dislike others comments == pass
  24. Comment/Like: (not logged in) not able to like, og dislike others comments == pass
  25. Comment/Like: Alertmessage on icons to guide users == pass
  26. Comment/Like: Cant like/unlike same post twice == pass
  27. Navbar is rendered correctly == pass
  28. Page is responsive == pass

- **Expected Results:**
  - Issue, Comment, Description, user details and Avatar is fetched and displayed from the API
  - User can view and interact with content.
  - Non logged in can only view content, but not post/put any information inside the API.
  - Design responsive.
- **Result:** Fail

## Test Cases for `Comment`

- **Test Objective:**
- Verify that comment is displayed in IssuePage
- Verify that users are able to see, edit and delete comments.
- Verify users can see, like, dislike and undo their action.
- Ensure working links.

- **Test Steps:**

  1. CreateComment: Create comment module is Rendered == Pass
  2. CreateComment: Create comment module creates comments when promted data == Pass
  3. CreateComment: When comment created, user is verified with alert == Fail
  4. CreateComment: created with blank should result in displayed error == fail
  5. CreateComment: created with blank should not post anything to the API == pass
  6. CreateComment: (not logged in) share button should be a login link == fail
  7. CreateComment: Provide user with feedback when posting a comment == fail
  8. CreateComment: When shared, page is rendered to display posted comment == fail
  9. Dropdown: Display only if owner of comment == pass
  10. Dropdown: Edit start edit process == fail
  11. Dropdown: Delete, deletes comment and renders page == pass
  12. EditComment: User can retrieve current comment and edit == fail
  13. EditComment: When edit is submitted, comment content is changed and rerendered == fail
  14. Comments should appear stacked, and GET all comments realted to issue == pass
  15. Comments should filter with newest ascending == fail
  16. Comments should contain avatar, creation datetime == pass
  17. Comments should contain message/content == pass
  18. Comment/Like: Should display 2 waving hands on own comments == pass
  19. Comment/Like: Should display thumps up for like, and thumps down for dislikes == pass
  20. Comment/Like: Not able to like, og dislike own comments == pass
  21. Comment/Like: User able to like, og dislike others comments == pass
  22. Comment/Like: (not logged in) NOT able to like, og dislike others comments == pass
  23. Comment/Like: Alertmessage on icons to guide users == pass
  24. Comment/Like: Cant like/unlike same post twice == pass
  25. Comment/Like: User feedback when like/dislike pressed == fail - Refresh not rendering solid icon.
  26. Comment/Like: Like- dislike counter functioning on-line with icons == pass
  27. Navbar is rendered correctly == pass
  28. Page is responsive == pass

- **Expected Results:**
  - Comment should be posted, put and deleted from API
  - User can view and interact with content.
  - Non logged in can only view content, but not post/put any information inside the API.
  - Design responsive.
- **Result:** Fail

## Test Cases for `Likes and Dislikes`

- **Test Objective:**
- Verify that Likes and Dislikes are displayed in IssuePage/Comments component.
- Verify that users are able to view, Like/undo & dislike/undo comments.

- **Test Steps:**

  1. (Owner) Should display 2 waving hands on own comments == pass
  2. (Owner) Message stating uable to like/dislike own comment == pass
  3. (Owner) Not able to like/dislike own comment == pass
  4. (Owner) Liking/disliking same like/dislike will result in a deletion == pass
  5. (Owner) Liking/disliking same like/dislike will result in a deletion (refreshed page) == fail
  6. (User) Should display thumps up for like == pass
  7. (User) Should display thumps down for dislike == pass
  8. (User) Should be able to like, og dislike others comments == pass
  9. (User) Interactive icons upon hovering == pass
  10. (User) Interactive icons upon liking/disliking == pass
  11. (User) Interactive icons upon liking/disliking (refresh) == fail
  12. (NotLoggedIn) Should display thumps up for like == fail
  13. (NotLoggedIn) Should display thumps down for dislike == fail
  14. (NotLoggedIn) NOT able to like, og dislike others comments == pass
  15. Display amount of likes and dislikes, no matter what userstatus == fail
  16. Navbar is rendered correctly == pass
  17. Page is responsive == pass

- **Expected Results:**
  - Likes and Dislikes should be posted & deleted from API
  - All can view amount of like/unlikes
  - Non logged in can only view content, but not post/delete any information inside the API.
  - Design responsive.
- **Result:** Fail

## Test Cases for `Profile`

- **Test Objective:**
- Verify that Profile infomation is displayed and able to be edited in the page
- Verify that profile information is displayed to users, notlogged in and owners
- Verify Comments made by owner is displayed
- Verify Issues made by owner is displayed

- **Test Steps:**

  1. (Owner) Should display Comments & issues made by owner == fail
  2. (Owner) Should display profile information provided by owner == fail
  3. (Owner) Should display profile Avatar == fail
  4. (Owner) Edit Links only visible to owner == fail
  5. (Owner) Links are working to Comments, Issues and edit profile == fail
  6. (User/NotLoggedIn) Should display Comments & issues made by profileowner == fail
  7. (User/NotLoggedIn) Should display profile information provided by profileowner == fail
  8. (User/NotLoggedIn) Should display profileowner Avatar == fail
  9. (User/NotLoggedIn) direct links for Issues and comments made by profileowner == fail
  10. Navbar is rendered correctly == pass
  11. Page is responsive == pass

- **Expected Results:**
  - Likes and Dislikes should be posted & deleted from API
  - All can view amount of like/unlikes
  - Non logged in can only view content, but not post/delete any information inside the API.
  - Design responsive.
- **Result:** Fail
