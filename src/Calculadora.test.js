function suma(x,y)
{
  var res = parseInt(x)+parseInt(y);
  return res;
}

it('suma correctamente', () => {
  expect(suma(5,6)).toBe(11);
  });


function rest (x,y)
   {
      var res = parseInt(x)-parseInt(y);
      return res;
    }

it('resta correctamente', () => {
      expect(rest(10,6)).toBe(4);
      });

function mult(x,y)
    {
      var res = parseInt(x)*parseInt(y);
      return res;
    }

it('multiplica correctamente', () => {
      expect(mult(5,6)).toBe(30);
      });

function div(x,y)
    {
      var res = parseInt(x)/parseInt(y);
      return res;
    }

it('divide correctamente', () => {
      expect(div(6,6)).toBe(1);
      });
