# 📄 Test Report – Book Application

**Tested By:** Subathira Kandasamy  
**Date:** [2026-03-05]  
**Application:** Book App (Bookshelf)  
**Environment:** Local   
**Browser:** Chrome   
**Device:** Desktop 

---

## 1️⃣ Summary

This report summarizes the results of the testing conducted on the Book App. The app allows users to:

- Browse or discover books
- Search for books
- View book details
- Filter and sort books by title, author, published date, book date, status (Read/Archived)
- User login and profile management
- Basic and advanced search functionality
- Creating a shelf
- Linguistic Support 

---

## 2️⃣ Test Coverage of Key Use Cases

| Feature Tested                   | Test Type         | Status        | Notes                                   |
|----------------------------------|-----------------|------------------|----------------------------------------|
| Login functionality              | Functional       | ✅ Passed     | Login successful with valid credentials |
| Book Sorting / filtering         | Functional       | ✅ Passed     | Sort and filters work as expected       |
| Read / Archived status handling  | Functional       | ✅ Passed     | Status toggles properly                  |
| Search (basic & advanced)        | Functional       | ✅ Passed     | Results match search criteria            |
| User Profile settings            | Functional       | ✅ Passed     | Updates and validations successful       |

---

## 3️⃣ Bugs / Issues Found

| Bug ID | Description                                          | Severity | Status  |
|--------|------------------------------------------------------|----------|---------|
|Bug-001 |'Remember Me' functionality does not work as expected | Major       | TO DO   |
|Bug-002 |Application crashes when Search field has a very long text as the input | Major       | TO DO   |
|Bug-003 |Application crashes when Search field has a very long text as the input | Major       | TO DO   |
|Bug-004 |Books tagged as both Archived and Read should be displayed in both ‘Archived Books’ and “Read’ sections | Major | TO DO|
|Bug-005 |Sort by title alphabetically ASC and DESC does not work as expected| Major| TO DO |
|Bug-006 | Possible to create a shelf with no name (maybe by design)| Minor| TO DO
|Bug-007 | Possible to create a shelf with a very large name (affects page layout)| Minor| TO DO
|Bug-008 | Provide easy to understand icons for sorting and filtering (affects user experience) | Minor |TO DO
|Bug-009 | Security realted - Able to access internal directory structure via some links | Major | TO DO
|Bug-010 | Some functionalities are stagnant and not complete (affects user experience)| Major | TO DO

## 4️⃣ Observations / Feedback

### **What I liked the most:**
- The app provides **basic and advanced search**, making it flexible for users.
- Filtering and sorting functionalities.  
- Ability to customize the Home Page View.
- The idea of a book shelf.


### **What I didn’t like:**
- Error messages are not clear. Too generic.
- Security prone - There are links that redirect and expose the user to the backend file structure (files and directories)  
- UI is not clear and intuitive (ex: icons, page layout).
- Some functionalities are not working as expected.
- Some popups occasionally take a moment to load, which may confuse users.  
- Some sorts are not clear as to if it is sorting by last name or first name. Have to use the tooltip to figure out the type of sort.
- Status toggles (Read/Archived) do not have immediate visual feedback sometimes.  

### **How I could improve it:**
- Provide clear and concise error messages to the user as per the scenario.
- Load indicators for popups and other actions to improve user experience.  
- Ensure UI elements updated and displayed accordingly to the app status. 
- Provide better icons and descriptions of what they do to the user.  
- Improve the layout e.g., navigation from one element to the other.

### **Other features I would like the app to have:**
- Book Review section.  
- Wishlist for personal collections.  

---

## 5️⃣ Conclusion

The Book App is stable and ficntions on a basic level, covering the main use cases of browsing, searching, and managing books. UI/UX improvements and additional features would enhance the user experience further.  
