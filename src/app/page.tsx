import { Button } from '@/components/Button'
import { MyButton } from '@/components/MyButton'
import { MyButtonTest } from '@/components/MyButtonTest'

const Home = () => (
  <main>
    <h1 className="text-3xl font-bold">Hello world!</h1>
    <div className="flex gap-3">
      <Button>button</Button>
      <MyButton>my button</MyButton>
      <MyButtonTest>other button</MyButtonTest>
    </div>
  </main>
)

export default Home
