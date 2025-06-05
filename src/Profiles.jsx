const hendy = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const boris = {
  name: 'Boris Johnson',
  imageUrl: 'https://th.bing.com/th/id/OSK.uwIG5hcQGC0C-mCdzoMuXd9y3g4d1tPUhCPDfCjqAbw?w=102&h=102&c=7&o=6&pid=SANGAM',
  imageSize: 100,
};

export default function Profile() {
  return (
    <>
      <h1>{hendy.name}</h1>
      <img
        className="avatar"
        src={hendy.imageUrl}
        alt={'Photo of ' + hendy.name}
        style={{
          width: hendy.imageSize,
          height: hendy.imageSize
        }}

      <h1>{boris.name}</h1>
      <img
        className="avatar"
        src={boris.imageUrl}
        alt={'Photo of ' + boris.name}
        style={{
          width: boris.imageSize,
          height: boris.imageSize
        }}
      />
    </>
  );
}
