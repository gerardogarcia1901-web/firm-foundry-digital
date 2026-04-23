import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Scale, Gavel, Briefcase, Building2, ShieldCheck, FileText, ArrowRight,
  Home as HomeIcon, Globe, TrendingUp, BookOpen, Check
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Scale, title: "Derecho Civil",
    desc: "Asesoría y representación en toda la materia civil salvadoreña: desde un contrato hasta un litigio patrimonial complejo.",
    points: [
      "Redacción y revisión de contratos",
      "Compraventa de bienes inmuebles",
      "Sucesiones, herencias y testamentos",
      "Responsabilidad civil contractual y extracontractual",
      "Arrendamientos urbanos y rústicos",
      "Cobros y ejecuciones civiles",
    ],
    tone: "navy",
  },
  {
    icon: Gavel, title: "Derecho Penal",
    desc: "Defensa estratégica en todas las etapas del proceso penal salvadoreño, con discreción absoluta y respaldo técnico.",
    points: [
      "Defensa en audiencia inicial y juicio oral",
      "Recursos de apelación y casación",
      "Amparos y hábeas corpus",
      "Asesoría a víctimas y querellantes",
      "Delitos económicos y financieros",
      "Salidas alternas al proceso",
    ],
    tone: "burgundy",
  },
  {
    icon: Briefcase, title: "Derecho Laboral",
    desc: "Representación de empresas y trabajadores en conflictos individuales, colectivos y auditorías de cumplimiento.",
    points: [
      "Contratación y elaboración de reglamentos",
      "Despidos y liquidaciones laborales",
      "Conflictos colectivos y huelgas",
      "Auditorías laborales preventivas",
      "Procesos ante el Ministerio de Trabajo",
      "Outsourcing y tercerización",
    ],
    tone: "navy",
  },
  {
    icon: Building2, title: "Derecho Mercantil & Corporativo",
    desc: "Acompañamiento integral a empresas, desde su constitución hasta operaciones complejas como fusiones y adquisiciones.",
    points: [
      "Constitución de sociedades en El Salvador",
      "Gobierno corporativo y juntas directivas",
      "Fusiones, adquisiciones y reestructuras",
      "Contratos mercantiles y distribución",
      "Propiedad intelectual y marcas",
      "Compliance y prevención del lavado",
    ],
    tone: "burgundy",
  },
  {
    icon: HomeIcon, title: "Derecho de Familia",
    desc
