// type assetions

let message;
message = 'abc';

// 1 - Preferable way
let endsWithC1 = (<string>message).endsWith('c');

// 2 - Another way
let endsWithC2 = (message as string).endsWith('c');