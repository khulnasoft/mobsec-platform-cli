# API

```tsx
import {MobSecClient, Platform, PlatformConfig, userGroups} from "@mobsec/platform-lib"

const platformConfig = new PlatformConfig("My Api Token")
const client = new MobSecClient(platformConfig)
const platform  = new Platform(client)

describe("Function vs methods", () => {

  test("Function calls and Platform methods are equivalent", async () => {
    const fromFunction = await userGroups(client)
    const fromMethod = await platform.userGroups()

    expect(fromFunction).toEqual(fromMethod)
  })
}

```

API functions can be referenced either as stand-alone functions taking a [MobSecClient](#mobsecclient)
instance or by constructing an instance of the [Platform](#platform) class passing a [MobSecClient](#mobsecclient) to the constructor and calling the equivalent method.
