import { Card } from './card';

const cardraw = `of
put
find
been
thank
one
him
old
talk
many
about
before
new
took
each
Mr.
being
does
years
words
color
read
why
her
stop
left
once
must
ask
walk
out
say
two
any
other
over
own
people
both
circle
says
never
none
because
through
where
open
there
had
it's
many
think
just
want
also
first
call
now
down
could
work
around
should
between
write
good
day
when
way
here
take
little
what
then
from
where
after
use
how
only
your
some
would
friend
Mrs.
under
nothing
very
another
month
them
more`;

function makeCardArray(): Card[] {
  const rawCardArray = cardraw.split('\n');
  let retCardArr: Card[] = [];
  let count = 1;
  for (let item of rawCardArray) {
    retCardArr.push(new Card(count, item));
    count++;
  }
  return retCardArr;
}


export const CARDS = makeCardArray();


