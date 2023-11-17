import './card.css'
import '../avatar'

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.nome - some description here
 * @property {string} CardProps.cargo - some description here
 * @property {string} CardProps.img - some description here
 * 
 * @param {CardProps} props
 */
export function card(props) {
  const {nome, cargo, img} = props;

  return `
  <div class="card">
    <div class="profiletop"></div>
      <div class="header">${avatar({
        imgSrc: img, 
        descricao: 'profile picture from ' + nome
      })}
      </div>
      <div class="body"> 
        <div class="nome">${nome}</div>
        <div class="cargo">${cargo}</div>
      </div>
    </div>
  `
}