import Link from 'next/link'

export default function(props){
  return (
    <div>
      <Link href="/">Home</Link>
      {props.children}
</div>
  )
}