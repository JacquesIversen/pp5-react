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
9. Burger should close when clicked outside, moredropdown.js == Fail

**Expected Result:**
The `NavBar` component should render with a visible navbar logo.
Links should take you to designated destination.
Dropdown functionality linked from moreDropdown.js appied.

**Result:** Passed

## NotFound Component Test Cases

**Test Case Description:** Verify that the `NotFound` component renders correctly.

**Test Steps:**

1. Render the `NotFound` component.
2. Check if the "Not Found" image and message are displayed.

**Expected Result:**
The `NotFound` component should render with a visible "Not Found" image and message.

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

## Test Cases for `IssuePage`

- **Test Objective:**
- Verify that all can view the issue:
- Verify that users are able to see comments regarding this specific issue
- Verify users can create comments in the thread.
- Ensure working links.

- **Test Steps:**

  1.  Navigate to the IssuePage as a logged in user == pass
  2.  Navigate to the IssuePage as a static user == pass
  3.  Issue is displayed in card format, with listing date and (functional)commentcounter == pass
  4.  Issue has describtion in the bottom in full length == pass
  5.  3 Dots shows only if owner of issue == pass
  6.  3 Dots edit link takes you to EditIssue == pass
  7.  3 Dots Delete, deletes issue == pass
  8.  3 Dots Delete, confirmation alert apearing == Fail
  9.  IssueDescription: Vehicle description is displayed in right side == pass
  10.  IssueDescription: Owner Biography and Avatar is displayed in right side == Fail
  11.  CreateComment: Create comment module is displayed at the top of comments == Pass
  12.  CreateComment: Create comment module creates comments when promted data == Pass
  13.  CreateComment: When comment created, user is verified with alert == Fail
  14.  CreateComment: created with blank should result in displayed error == fail
  15.  CreateComment: created with blank should result in displayed error == fail
  16.  Comment: Comments should appear stacked, and GET all comments realted to issue == pass
  17.  Comment: Comments should filter with newest ascending == fail
  18.  Comment: Comments should contain avatar, creation datetime == pass
  19.  Comment: Comments should contain message/content == pass
  20.  Comment: Comments should contain message/content == pass
  9.  Form appear with tired man default picture == pass
  8.  All form inputs are able to be prompted == pass
  9.  When uploading picture, picture appear == pass
  10. Availability to change issue picture == pass
  11. Share button will immediately give feedback to the user == fail
  12. When shared, issue is posted and user directed to issuepage == pass
  13. Sending empty form will cause error, and not post content == fail
  14. Sending default picture will cause error, and not post content == pass
  15. Input placeholder text is displayed == pass
  16. Navbar is rendered correctly == pass
  17. Page is responsive == pass

- **Expected Results:**
  - User has successfully created an issue, which is posted to the API.
  - User cant send empty data.
  - Design responsive.
- **Result:** Fail
