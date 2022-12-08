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
  
  function clearComment(){
    $('#txt1').val('');
    $('#namebox').val('');
    clearStorage();
    bindCmt();
  }
  
  function saveComment(){
    var commentText = $('#txt1').val(),
        commentName = $('#namebox').val(),
        cmtList = getObject('cmtlist');

    if (commentName.trim().length == 0) {
      commentName = "Anonymous";
    }

    if (commentText.trim().length == 0) {
      window.alert("Please Enter a Comment!");
      return
    }
  
    if (cmtList){
      cmtList.push({name: commentName, text: commentText});
      setObject('cmtlist', cmtList);
    }else{ 
      setObject('cmtlist', [{name: commentName, text: commentText}]);
    }
  
    bindCmt();
  }

  function bindCmt(){
    var cmtListElement = $('#cmtlist'),
        cmtList = getObject('cmtlist');
  

    cmtListElement.empty();

    $.each(cmtList, function(i, k){
      cmtListElement.append( $('<div class = "comments"> <span class = "comment_name">'+ k.name +'</span><br><span class = "comment_text">'+ k.text +'</span></div>') );
    });
  }
  
  $(function(){
    bindCmt();
  });




