export default function sortObjectInArray(array) {
  let byHealth = array;
  byHealth.sort(function (a, b) {
    return b.health - a.health;
  });

  return byHealth;
}
