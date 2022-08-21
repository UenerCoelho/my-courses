window.onhashchange = function(event) {
  const oldURL = event.oldURL.split('#')[1];
  const newURL = event.newURL.split('#')[1];
  console.log(oldURL, newURL);
  const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`);
  const newLink = document.querySelector(`.menu a[href='#${newURL}']`);
  oldLink && oldLink.classList.remove('selected');
  newLink && newLink.classList.add('selected');
}; 