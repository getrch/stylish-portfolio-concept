
export const softColorClasses = [
  'badge-softGreen',
  'badge-softYellow',
  'badge-softOrange',
  'badge-softPurple',
  'badge-softPink',
  'badge-softPeach',
  'badge-softBlue',
  'badge-softGray'
];

export const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * softColorClasses.length);
  return softColorClasses[randomIndex];
};
