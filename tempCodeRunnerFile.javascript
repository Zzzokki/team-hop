function run() {
  throw new Error("Aldaa");
}

function go() {
  try {
    run();
  } catch (error) {
    console.log(error);
  }
  console.log("x");
}

go();
