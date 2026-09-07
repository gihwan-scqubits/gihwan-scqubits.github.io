// Assemble the mailto link at runtime so the address is not in the HTML source.
document.querySelectorAll('a.email[data-u][data-d]').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});
