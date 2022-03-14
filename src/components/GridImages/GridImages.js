import { Container } from "./Container/Container";
import Image from "../Image/Image"

const data = [
  {
    id: 1,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 2,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 3,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 4,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01500/opgs/edr/fcam/FRB_530660118EDR_F0582394FHAZ00318M_.JPG",
  },
  {
    id: 5,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500ML0076030000603939E02_DXXX.jpg",
  },
  {
    id: 6,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500ML0076020030603937E01_DXXX.jpg",
  },
  {
    id: 7,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500MR0075980080404385E01_DXXX.jpg",
  },
  {
    id: 8,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 9,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 10,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 11,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 12,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 13,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 14,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01500/opgs/edr/fcam/FRB_530660118EDR_F0582394FHAZ00318M_.JPG",
  },
  {
    id: 15,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500ML0076030000603939E02_DXXX.jpg",
  },
  {
    id: 16,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500ML0076020030603937E01_DXXX.jpg",
  },
  {
    id: 17,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500MR0075980080404385E01_DXXX.jpg",
  },
  {
    id: 18,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 19,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 20,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 21,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
  },
  {
    id: 22,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 23,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
  },
  {
    id: 24,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01500/opgs/edr/fcam/FRB_530660118EDR_F0582394FHAZ00318M_.JPG",
  },
  {
    id: 25,
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01500/mcam/1500ML0076030000603939E02_DXXX.jpg",
  }
];

const GridImages = () => {
  return (
    <Container>
      {data.map(({id, img_src}) => (
        <Image key={id} id={id} source={img_src} />
      ))}
    </Container>
  );
};

export default GridImages;
