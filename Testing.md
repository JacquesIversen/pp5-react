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

### Test Case 1: Render NotFound Page

**Test Case Description:** Verify that the `NotFound` component renders correctly.

**Test Steps:**
1. Render the `NotFound` component.
2. Check if the "Not Found" image and message are displayed.

**Expected Result:**
The `NotFound` component should render with a visible "Not Found" image and message.

**Result:** Passed


## Test Cases for `SignInForm`

### Test Case 1: Successful Sign-In


- **Test Objective:** 
- Verify that users can successfully sign in with valid credentials
- Verify that users are denied access when providing incorrect credentials.
- Ensure working links.

- **Test Steps:**
   1. Navigate to the Sign-In page. == pass
   2. Enter a valid username and password. == pass
   3. Click the "Sign In" button, user is signed in. == pass
   4. Enter a valid username and password. == pass
   5. Click the "Sign In" button, user is not signed in. == pass
   6. Sending empty data in form, should return an error message == Fail
   7. Link for signup working == pass
   8. Navbar is rendered correctly == pass

- **Expected Results:**
   - User is successfully signed in and redirected to the expected page.
- **Result:** Passed
