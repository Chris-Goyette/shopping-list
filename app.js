// goal is to let users add, check, uncheck, and remove items from the shopping list

$(function(){
    $('#js-shopping-list-form').submit(function(){
        // prevent default behavior for submit button
        event.preventDefault(); 
        // reference to user input text
        const shoppingListEntry = $('#shopping-list-entry').val(); 
        const newListItem = `<li>
        <span class="shopping-item">${shoppingListEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`

        // append new list item to ul
        $('.shopping-list').append(newListItem);
        // clear form input after submit 
        $('#shopping-list-entry').val('');
    });

    $('.shopping-item-toggle').on('click', function(){
        $('.shopping-item').addClass('shopping-item__checked');
    });
});
