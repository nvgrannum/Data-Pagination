/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function breaks a page down into a 9 students. Each "page" argument will return a new set of students.
*/

let itemsPerPage = 9;

function showPage(list, page) {
   
   var indexStart = (page * itemsPerPage) - itemsPerPage;
   var indexEnd = page * itemsPerPage;
   var studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   for(let i=0; i<list.length; i++)
      if (i>=indexStart && i<indexEnd) {
         let registrar = `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i]["picture"]["large"]}" alt="Profile Picture">
            <h3>${list[i]["name"]["first"]} ${list[i]["name"]["last"]}</h3>
            <span class="email">${list[i]["email"]}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i]["registered"]["date"]}</span>
         </div>
         </li>`
         studentList.insertAdjacentHTML('beforeend', registrar);
      }
};




/*
Create the `addPagination` function
This function keeps the full student list in "pages" that can be 'activated' to display different sets of up to 9 students.
*/

function addPagination(list) {
   let totalPages = Math.ceil(list.length / itemsPerPage);
   let linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   for (let i=1; i<= totalPages; i++) {
      let pages = `<li>
         <button type="button">${i}</button>
      </li>`
      linkList.insertAdjacentHTML('beforeend', pages)
   }
   
   document.querySelector('button').className = 'active';
   linkList.addEventListener('click', (e)=> {
      if (e.target.tagName == 'BUTTON') {
         let button = document.querySelector('.active');
         button.classList.remove('active');
         e.target.classList.add('active');

         showPage(list, e.target.textContent);
      }

   });
}


// Call functions
showPage(data, 1);
addPagination(data);