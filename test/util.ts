export const formatBody = (body: any) => JSON.stringify(body)
  .replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  ).replace(
    /\";;/g,
    '',
  ).replace(
    /;;\"/g,
    '',
  );
