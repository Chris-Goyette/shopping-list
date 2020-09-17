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

        // Appends New List Item to ul
        $('.shopping-list').append(newListItem);

        // Clears Form Input After Clicking Add Item Button
        $('#shopping-list-entry').val('');
    });

    //Check and Uncheck List Items When Clicking the Check Button.
    $('.shopping-list').on('click','.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Delete List Items After Clicking the Delete Button
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove(); 
    });
});
