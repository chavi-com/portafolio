import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderRepos.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import biblioteca from'./biblioteca.png';
import blibliolegng from './blibliolegng.png';
import legtienda from './legtienda.png';
import tienda from './tienda.png';
import ventasfb from './ventasfb.png';
import ventasxf from './ventasxf.png';
import como_reservar_una from './como_reservar_una.jpg';
import hotelpor from './hotelpor.png';
import restaurante from './restaurante.jpeg';
import restauranteleg from './restauranteleg.png';
import appventas from './appventas.jpeg';
import appbiblioteca from './appbiblioteca.jpeg';
import arqcapasjfif from './arqcapasjfif.jfif';
import capaspor from './capaspor.png';
import servidorhotel from './servidorhotel.jfif';
import servidorotelv from './servidorotelv.png';
import servidorbiblioteca from './servidorbiblioteca.jfif';
import servibiblio from './servibiblio.png';
import repoporta from './repoporta.png';
import reporss from './reporss.png';


function UncontrolledExample() {

  const settings = {
    //dots: true,
    
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll:5,
    arrows: true,
    responsive: [
      {
          breakpoint: 1360, // x-large
          settings: {
              slidesToShow: 4.5,
              slidesToScroll: 2,
              arrows:true,
          },
      },
      {
          breakpoint: 8, // medium
          
          
          
          settings: {
              slidesToShow: 3.5,
              slidesToScroll: 2,
              arrows: false,
          
              
              
          },
      },
      {
          breakpoint: 570, // s-medium
          
          
          settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              arrows: false,
          
          },
      },
  ],
  }
  return (
    <div {...settings} className={"contenedorSlider invisible-scroll"}>
            <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={servidorbiblioteca} />
      <Card.Body>
        <Card.Title>Servidor notas U</Card.Title>

        <Card.Img className='porcentajere' src={servibiblio}/>
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/notas'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={biblioteca}/>
      <Card.Body>
        <Card.Title>Crud biblioteca </Card.Title>

        <Card.Img className='porcentajere' src={blibliolegng}/>
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/phpBliblioteca'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={tienda} />
      <Card.Body>
        <Card.Title>Tienda virtual</Card.Title>

        <Card.Img className='porcentajere' src={legtienda}/>
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/tienda'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={ventasfb}/>
      <Card.Body>
        <Card.Title>Facturas ventas</Card.Title>

        <Card.Img className='porcentajere' src={ventasxf}/>
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/ventas_facebook'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={como_reservar_una}/>
      <Card.Body>
        <Card.Title>Hotel reservas</Card.Title>

        <Card.Img className='porcentajere' src={hotelpor} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={restaurante} />
      <Card.Body>
        <Card.Title>Restaurante</Card.Title>

        <Card.Img className='porcentajere' src={restauranteleg} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={appventas} />
      <Card.Body>
        <Card.Title>App ventas</Card.Title>

        <Card.Img className='porcentajere' src={hotelpor} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={appbiblioteca} />
      <Card.Body>
        <Card.Title>App biblioteca</Card.Title>

        <Card.Img className='porcentajere' src={hotelpor} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />

        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
        </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={repoporta}/>
      <Card.Body>
        <Card.Title>Portafilio</Card.Title>

        <Card.Img className='porcentajere' src={reporss} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/portafolio'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={arqcapasjfif}/>
      <Card.Body>
        <Card.Title>Capas  c#</Card.Title>

        <Card.Img className='porcentajere' src={capaspor} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com/arquitecturadeCapasC-'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src={servidorhotel} />
      <Card.Body>
        <Card.Title>Servidor hotel</Card.Title>

        <Card.Img className='porcentajere' src={servidorotelv} />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>
      </Card.Body>
    </Card>
      </Carousel.Item>


      <Carousel.Item {...settings} className={'contentRepo'} >
      <Card style={{ width: '13rem',position:'flex ' }}>
      <Card.Img className='fotorepo' variant="top" src="https://cdn.shopify.com/s/files/1/0229/0839/files/pagina_web.jpg?v=1654027275" />
      <Card.Body>
        <Card.Title>Ver mas en git</Card.Title>

        <Card.Img className='porcentajere' src="https://www.soyunignorante.es/wp-content/uploads/2020/10/merge-two-git-repo.png" />
        <Card.Img className='logogit' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" />
        <a className='enlasesrepo' href='https://github.com/chavi-com'>
          <Button className='botongit' variant="primary">Ver en Github</Button>

        </a>

      </Card.Body>
    </Card>
      </Carousel.Item>
    </div>
    
  );
}

export default UncontrolledExample;