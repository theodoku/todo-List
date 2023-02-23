function remove(index) {
  const item = document.getElementById(index);
  item.parentNode.removeChild(item);
}


export default remove;