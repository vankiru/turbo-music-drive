import { Link } from '@inertiajs/react'

export default function Header() {
  return (
    <Link href="/" className="opacity-90 hover:opacity-100">
      <span>Turbo</span> <span className="font-bold text-red-500">Music</span> <span>Drive</span>
      <hr className="my-4" />
    </Link>
  );
}
