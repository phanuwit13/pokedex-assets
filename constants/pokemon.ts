export const API_BASE_URL = "https://pokeapi.co/api/v2"
export const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

export const MAX_POKEMON_ID = 1025 // id เกินนี้คือ form พิเศษ (10001+)
export const MAX_STAT = 255
export const BOOKMARK_KEY = "bookmarks"

// ช่วง id ของแต่ละ Gen (ตัวแรก = Gen 1)
export const GENERATIONS = [
  { start: 1, end: 151 },
  { start: 152, end: 251 },
  { start: 252, end: 386 },
  { start: 387, end: 493 },
  { start: 494, end: 649 },
  { start: 650, end: 721 },
  { start: 722, end: 809 },
  { start: 810, end: 905 },
  { start: 906, end: 1025 },
]

// สีของแต่ละธาตุ (ใช้กับ Badge)
export const TYPE_COLORS: Record<string, string> = {
  normal: "#dcdcdc", fire: "#ffb971", water: "#8cc4e2", grass: "#a8ff98",
  electric: "#ffe662", ice: "#8cf5e4", fighting: "#da7589", poison: "#d6a2e4",
  ground: "#e69a74", flying: "#bbc9e4", psychic: "#ffa5da", bug: "#bae05f",
  rock: "#c9bb8a", ghost: "#8291e0", dragon: "#88a2e8", dark: "#8e8c94",
  steel: "#9fb8b9", fairy: "#fdb9e9",
}

// รายชื่อธาตุ ดึงมาจากชื่อใน TYPE_COLORS: ["normal", "fire", ...]
export const TYPES = Object.keys(TYPE_COLORS)

export const SORT_OPTIONS = ["id", "name"] as const
export const ALL = "all" // ค่าแทน "ไม่ filter" (shadcn Select ไม่รับค่าว่าง)
