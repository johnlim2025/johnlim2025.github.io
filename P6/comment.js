// utility functions for localstorage
function setObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  function getObject(key) {
    var storage = window.localStorage,
        value = storage.getItem(key);
    return value && JSON.parse(value);
  }
  function clearStorage() {
    window.localStorage.clear();
  }
  
  // Clear inputfields and localstorage
  function clearComment(){
    $('#txt1').val('');
    $('#namebox').val('');
    clearStorage();
    bindCmt();
  }
  
  function saveComment(){
    var cText = $('#txt1').val(),
        cName = $('#namebox').val(),
        cmtList = getObject('cmtlist');
  
    if (cmtList){
      cmtList.push({name: cName, text: cText});
      setObject('cmtlist', cmtList);
    }else{ //Add a comment
      setObject('cmtlist', [{name: cName, text: cText}]);
    }
  
    bindCmt();
  }

  function bindCmt(){
    var cmtListElement = $('#cmtlist'),
        cmtList = getObject('cmtlist');
  
    //Out with the old
    cmtListElement.empty();
    //And in with the new
    $.each(cmtList, function(i, k){
      cmtListElement.append( $('<div class = "comments"> <span class = "comment_name">'+ k.name +'</span><br><span class = "comment_text">'+ k.text +'</span></div>') );
    });
  }
  
  //Get the comments on page ready
  $(function(){
    bindCmt();
  });




