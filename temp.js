function calculateHours({
  coupleShooting,
  churchWedding,
  civilWedding,
  groupPhotos,
  guests,
  locations,
  baseBufferTime = 0.5, // Optimal base buffer time
  bufferPerGuest = 0.005, // Optimal buffer time per guest
}) {
  const weights = {
    coupleShooting: 1,
    churchWedding: 2.5,
    civilWedding: 0.5,
    groupPhotos: 0.5,
    guests: 0.05, // Additional hours per 10 guests
    locations: 0.5, // Additional hours per location
  };

  let totalHours = 0;
  if (coupleShooting) totalHours += weights.coupleShooting;
  if (churchWedding) totalHours += weights.churchWedding;
  if (civilWedding) totalHours += weights.civilWedding;
  if (groupPhotos) totalHours += weights.groupPhotos;

  totalHours += (guests / 10) * weights.guests;
  totalHours += (locations - 1) * weights.locations;

  const bufferTime = baseBufferTime + guests * bufferPerGuest;
  totalHours += bufferTime;

  return totalHours;
}

const weddings = [
  {
    name: "Sophia&Alex",
    guests: 80,
    realHours: 4,
    locations: 2,
    coupleShooting: true,
    churchWedding: true,
    civilWedding: false,
    groupPhotos: true,
  },
  {
    name: "Kathrin&Morrison",
    guests: 80,
    realHours: 5,
    locations: 2,
    coupleShooting: true,
    churchWedding: true,
    civilWedding: true,
    groupPhotos: true,
  },
  {
    name: "Kathi&Thomas",
    guests: 18,
    realHours: 2,
    locations: 1,
    coupleShooting: true,
    churchWedding: false,
    civilWedding: true,
    groupPhotos: true,
  },
  {
    name: "Verena&Daniel",
    guests: 18,
    realHours: 2.5,
    locations: 2,
    coupleShooting: true,
    churchWedding: false,
    civilWedding: true,
    groupPhotos: true,
  },
  {
    name: "Sandra&Jakob",
    guests: 80,
    realHours: 4,
    locations: 2,
    coupleShooting: true,
    churchWedding: true,
    civilWedding: false,
    groupPhotos: true,
  },
  {
    name: "Selina&Berkan",
    guests: 50,
    realHours: 2,
    locations: 1,
    coupleShooting: true,
    churchWedding: false,
    civilWedding: true,
    groupPhotos: true,
  },
  {
    name: "Tom&Sarah",
    guests: 80,
    realHours: 4,
    locations: 2,
    coupleShooting: true,
    churchWedding: true,
    civilWedding: false,
    groupPhotos: true,
  },
  {
    name: "Brigitta&Sandor",
    guests: 0,
    realHours: 1,
    locations: 2,
    coupleShooting: true,
    churchWedding: false,
    civilWedding: true,
    groupPhotos: false,
  },
  // {
  //   name: "Kristina&Dima",
  //   guests: 180,
  //   realHours: 10,
  //   locations: 2,
  //   coupleShooting: true,
  //   churchWedding: true,
  //   civilWedding: false,
  //   groupPhotos: true,
  // },
];

let totalDifference = 0;

weddings.forEach((wedding) => {
  const calculatedHours = calculateHours({
    coupleShooting: wedding.coupleShooting,
    churchWedding: wedding.churchWedding,
    civilWedding: wedding.civilWedding,
    groupPhotos: wedding.groupPhotos,
    guests: wedding.guests,
    locations: wedding.locations,
  });

  const difference = calculatedHours - wedding.realHours;
  totalDifference += difference;

  console.log(
    `Wedding: ${wedding.name}, Real Hours: ${wedding.realHours}, Calculated Hours: ${calculatedHours.toFixed(2)}, Difference: ${difference.toFixed(2)}`,
  );
});

const averageDifference = totalDifference / weddings.length;
console.log(`Average Difference: ${averageDifference.toFixed(2)}`);
