import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between ">
      <div className="w-full flex flex-col gap-2 px-3 py-4">
        <div className="flex justify-center items-center rounded-md px-4 w-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-1 bg-zinc-100">
          <Search className="text-orange-400" />
          <Input className="bg-transparent ring-offset-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 border-0" />
        </div>
        <div className="flex gap-4 px-4 py-2 w-full items-center  justify-center">
          <Badge className="text-xl cursor-pointer">Populares</Badge>
          <Badge variant="outline" className="text-xl cursor-pointer">Estudantes</Badge>
        </div>
      </div>
      <header className="flex flex-col justify-center w-full px-2 py-3">
        <h1 className="text-2xl font-semibold">Obras Renomadas</h1>
        <div className="flex gap-4 px-4 py-2">
          <Badge className="text-md cursor-pointer" variant="outline">Abstrato</Badge>
          <Badge className="text-md cursor-pointer">Oleo</Badge>
          <Badge className="text-md cursor-pointer" variant="outline">Afresco</Badge>
          <Badge className="text-md cursor-pointer" variant="outline">Aquarela</Badge>
        </div>
      </header>
      <div className="flex-1 h-full w-full bg-orange-400 grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] px-4 py-2 items-center justify-center">
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>
        <Card className="w-[400px] h-fit">
          <CardHeader>
            <CardTitle>Toulouse Lautrec</CardTitle>
            <CardDescription>1889</CardDescription>
          </CardHeader>
          <CardContent>
            A Lavadeira
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge className="text-md cursor-pointer text-orange-400 outline-orange-400" variant="outline">Olio</Badge>

          </CardFooter>
        </Card>

      </div>
    </main>
  )
}
