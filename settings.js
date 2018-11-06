'use strict'
window.onload = () => {
    const calBtn = document.getElementById('calendar-btn');
    const editCal = document.getElementById('edit-calendar');
    const deleteBtns = document.getElementsByClassName('delete');

    if (editCal && deleteBtns) {
        editCal.addEventListener('click', () => {
            alert('something');
            for (var i = 0; i < deleteBtns.length; ++i) {
                deleteBtns[i].style.opacity = '1';
            }
        });
    }

    // if (calBtn) {
    //     calBtn.addEventListener('click', () => {
    //         console.log('you clicked me');
    //         let newCal = document.getElementById('add-cal');
    //         let li = '<li>' + newCal + '</li';
    //         document.getElementById('calendar-list').appendChild(li);
    //     });
    // }
}
