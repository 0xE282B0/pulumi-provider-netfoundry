import * as netfoundry from "@pulumi/netfoundry";

const random = new netfoundry.Random("my-random", { length: 24 });

export const output = random.result;