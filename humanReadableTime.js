function humanReadable(seconds) {
  let temp = seconds;
  const hours = String(Math.floor(temp / 3600));
  temp -= hours * 3600;
  const minutes = String(Math.floor(temp / 60));
  temp -= minutes * 60;
  temp = temp.toString();
  return `${hours.length === 1 ? "0" + hours : hours}:${
    minutes.length === 1 ? "0" + minutes : minutes
  }:${temp.length === 1 ? "0" + temp : temp}`;
}
