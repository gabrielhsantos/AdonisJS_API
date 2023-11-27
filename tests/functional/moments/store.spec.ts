import { test } from '@japa/runner'

test.group('Moments store', () => {
  test('insert a moment', async ({ client }) => {
    const response = await client.post('/moments')

    console.log(response)

    response.assertStatus(201)
  })
})
